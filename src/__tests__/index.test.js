import { getByRole } from '@testing-library/dom';

function getExampleDOM() {
  const root = document.createElement('div');

  root.innerHTML = `
    <ul>
      <li>Item A</li>
      <li>Item B</li>
    </ul>
  `;

  return root;
}

test('should render list items', () => {
  const container = getExampleDOM();
  getByRole(container, 'list');
  getByRole(container, 'listitem', { name: /item a/i });
});

