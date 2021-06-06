import { GuardFunction, ArgsOf } from '@typeit/discord';

export const NotBot: GuardFunction<ArgsOf<'message'>> = async (
  [message],
  client,
  next,
  guardDatas,
) => {
  if (client.user.id !== message.author.id) {
    // the NotBot guard passed
    console.log(guardDatas);
    await next();
  }
};
