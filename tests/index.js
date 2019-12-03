import { Selector } from 'testcafe';

const header = Selector('h1');
const body = Selector('a');

fixture('Test')
  .page('http://localhost:3000');

test('test_1', async (t) => {
  await t
    .expect(header.innerText).eql('TestCafe')
    .expect(body.innerText).eql('Learn React')
});