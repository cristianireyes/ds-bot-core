import { expect } from 'chai';
import { Main } from '../src';

import 'mocha';

describe('First test',
  () => {
    it('should return true', async () => {
      await Main.start();
      const client = Main.client;
      expect(client).to.be.not.null;
    });
  },
);
