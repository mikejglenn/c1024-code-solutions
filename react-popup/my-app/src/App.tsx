import { useRef, useState } from 'react';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonPopup = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonPopup} onClick={() => setIsOpen(true)}>
        Pop up!
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        blandit metus non est hendrerit, bibendum cursus odio consectetur.
        Aliquam in risus eu libero tristique dapibus. Suspendisse ut tellus quis
        elit tincidunt feugiat. Sed sollicitudin sollicitudin nunc in bibendum.
        Phasellus et tortor molestie, ullamcorper odio id, blandit magna.
        Vestibulum et augue elementum, iaculis nunc eu, faucibus tellus.
        Maecenas nec lectus erat. Duis ac sem quis lectus tristique suscipit
        quis a erat. Ut lacinia purus ac augue luctus congue.
      </p>
      <Popup
        isOpen={isOpen}
        positionTo={buttonPopup.current}
        onClose={() => setIsOpen(false)}
        opacity="0.5">
        <ul
          style={{
            background: '#777',
            boxShadow: '5px 5px 5px #f00',
            listStyle: 'none',
            padding: '10px',
          }}>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
        </ul>
      </Popup>
      <p>
        Cras lobortis, elit in vulputate venenatis, purus orci congue lorem,
        eget interdum nisl est non dolor. Pellentesque euismod est quam, a
        pharetra lacus imperdiet eu. Pellentesque eleifend ipsum urna, ac
        commodo neque imperdiet id. Integer viverra porttitor blandit. Nunc
        eleifend lacus vitae purus bibendum vulputate. Cras aliquet aliquet leo,
        eu semper metus finibus ac. Nulla eget nisl hendrerit, consequat enim
        in, sollicitudin felis. Mauris ut diam a urna aliquet lobortis ac sed
        dui. Nullam in erat vitae velit suscipit dictum.
      </p>
    </>
  );
}

export default App;
