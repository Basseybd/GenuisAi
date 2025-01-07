import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_00;

export const checkSubscription = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: { userId },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  // If there is no subscription record at all, it’s automatically invalid
  if (!userSubscription) {
    return false;
  }

  // If `stripeCurrentPeriodEnd` is null or missing, treat it as invalid
  if (!userSubscription.stripeCurrentPeriodEnd) {
    return false;
  }

  // Safely compute whether the period end is after `Date.now()`
  const { stripePriceId, stripeCurrentPeriodEnd } = userSubscription;
  const currentEndTime = stripeCurrentPeriodEnd.getTime();

  const isValid = !!stripePriceId && currentEndTime + DAY_IN_MS > Date.now();

  return isValid;
};
