import { ArgsOf, GuardFunction } from '@typeit/discord';

export function Prefix(text: string, replace = true) {
  const guard: GuardFunction<ArgsOf<'message'>> = async ([message], client, next) => {
    const startWith = message.content.startsWith(text);
    if (replace) {
      message.content = message.content.replace(text, '');
    }
    if (startWith) {
      await next();
    }
  };

  return guard;
}
