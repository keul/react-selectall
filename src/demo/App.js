import React from 'react';
import SelectAll from '../lib';

import './demo.scss';

const writeTo = text => {
  const console = document.getElementById('console');
  console.innerText = text;
  setTimeout(() => {
    console.innerText = '';
  }, 5000);
};

const CustomP = props => {
  const { children, ...other } = props;
  return <p {...other}>{children}</p>;
};

const CustomSpan = props => {
  const { children, ...other } = props;
  return <span {...other}>{children}</span>;
};


const App = () => (
  <div>
    <h2>
      <span>Getting started</span>
    </h2>
    <p className="doc">Select the text below with a double-click.</p>
    <SelectAll className="demo selectable">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula. Donec tempor vel
        lorem vel aliquet. Etiam faucibus posuere massa at consectetur. Etiam
        interdum turpis sed nibh viverra, in porttitor justo tristique.
        Phasellus ac felis in ligula aliquam sollicitudin. Sed arcu justo,
        laoreet a sagittis ultricies, elementum et arcu. Proin hendrerit lectus
        ac pellentesque ornare. Pellentesque congue faucibus lacus egestas
        hendrerit. Suspendisse accumsan elit non elit iaculis condimentum. Cras
        erat nisi, ultrices efficitur lacinia vel, dictum eu velit. Aliquam ac
        blandit turpis, sed hendrerit orci. Cras scelerisque, leo eu maximus
        vulputate, quam sapien euismod nunc, sed euismod metus quam a turpis.
      </p>
      <p>
        Phasellus ullamcorper malesuada ornare. Duis malesuada, mi venenatis
        vehicula bibendum, magna ante laoreet libero, sed tempus ante ipsum ut
        sem. Aenean arcu neque, placerat faucibus libero ac, interdum porttitor
        felis. Phasellus ac sem eros. Suspendisse dapibus tempus nibh, pharetra
        lacinia enim porttitor et. Vivamus pretium felis ut cursus vulputate.
        Cras blandit vel dui fringilla tincidunt. Pellentesque fermentum, erat
        quis vestibulum dictum, quam lorem efficitur ex, a faucibus orci diam
        quis dolor.
      </p>
    </SelectAll>

    <h2>
      <span>Just click</span>
    </h2>
    <p className="doc">A simple single-click trigger the selection.</p>
    <SelectAll className="demo selectable" selectOn="onClick">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula. Donec tempor vel
        lorem vel aliquet. Etiam faucibus posuere massa at consectetur. Etiam
        interdum turpis sed nibh viverra, in porttitor justo tristique.
        Phasellus ac felis in ligula aliquam sollicitudin. Sed arcu justo,
        laoreet a sagittis ultricies, elementum et arcu. Proin hendrerit lectus
        ac pellentesque ornare. Pellentesque congue faucibus lacus egestas
        hendrerit. Suspendisse accumsan elit non elit iaculis condimentum. Cras
        erat nisi, ultrices efficitur lacinia vel, dictum eu velit. Aliquam ac
        blandit turpis, sed hendrerit orci. Cras scelerisque, leo eu maximus
        vulputate, quam sapien euismod nunc, sed euismod metus quam a turpis.
      </p>
      <p>
        Phasellus ullamcorper malesuada ornare. Duis malesuada, mi venenatis
        vehicula bibendum, magna ante laoreet libero, sed tempus ante ipsum ut
        sem. Aenean arcu neque, placerat faucibus libero ac, interdum porttitor
        felis. Phasellus ac sem eros. Suspendisse dapibus tempus nibh, pharetra
        lacinia enim porttitor et. Vivamus pretium felis ut cursus vulputate.
        Cras blandit vel dui fringilla tincidunt. Pellentesque fermentum, erat
        quis vestibulum dictum, quam lorem efficitur ex, a faucibus orci diam
        quis dolor.
      </p>
    </SelectAll>

    <h2>
      <span>Selection event</span>
    </h2>
    <p className="doc">
      You can add an event handler to executed after selection take place.
    </p>
    <SelectAll
      className="demo selectable"
      onSelect={(ev, text, toClipboard) => {
        writeTo(`You selected some text!

Triggered by: ${ev.type} event.
Copied to clipboard: ${toClipboard ? 'true' : 'false'}

Text selected:

${text}
`);
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula. Donec tempor vel
        lorem vel aliquet. Etiam faucibus posuere massa at consectetur. Etiam
        interdum turpis sed nibh viverra, in porttitor justo tristique.
        Phasellus ac felis in ligula aliquam sollicitudin.
      </p>
      <p>
        Etiam ligula ex, cursus in ante sit amet, facilisis pretium tortor. Ut
        mollis malesuada dui ut porta. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Maecenas sapien nulla, posuere eget ligula eu,
        consequat accumsan enim. Aenean ullamcorper aliquam magna a scelerisque.
        Sed a ante vel velit pulvinar aliquam a a lorem. Pellentesque sit amet
        mauris venenatis enim placerat consectetur.
      </p>
    </SelectAll>

    <h2>
      <span>Copy to clipboard</span>
    </h2>
    <p className="doc">
      You can enable automatic copy to clipboard feature. Selected text is
      automatically copied.
    </p>
    <SelectAll className="demo selectable" toClipboard>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula. Donec tempor vel
        lorem vel aliquet. Etiam faucibus posuere massa at consectetur. Etiam
        interdum turpis sed nibh viverra, in porttitor justo tristique.
        Phasellus ac felis in ligula aliquam sollicitudin.
      </p>
      <p>
        Etiam ligula ex, cursus in ante sit amet, facilisis pretium tortor. Ut
        mollis malesuada dui ut porta. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Maecenas sapien nulla, posuere eget ligula eu,
        consequat accumsan enim. Aenean ullamcorper aliquam magna a scelerisque.
        Sed a ante vel velit pulvinar aliquam a a lorem.
      </p>
    </SelectAll>

    <h2>
      <span>Act on subelements</span>
    </h2>
    <p className="doc">
      You can choose to trigger selection when acting on sub-elements.{' '}
      <em><small>Works on React subcomponents as well.</small></em>
    </p>
    <SelectAll className="demo" childSelection>
      <p className="selectable">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula.
      </p>
      <p className="selectable">
        Elit pede donec, vel at, vitae mi. In wisi felis. Duis blandit libero.
        Magnis penatibus dolor, nulla porttitor ut, facilisi elementum. Orci
        ultrices, cum diam dolor, nibh ipsum. Ac vestibulum, non tortor integer,
        sit accumsan. Eget ut est, sint commodo est, pellentesque felis. Erat
        id, eget elementum.
      </p>
      <CustomP style={{fontStyle: 'italic'}}>
        <CustomSpan>
          Eleifend ac a, laoreet morbi leo. In pretium wisi, volutpat et risus, id
          diam. Id sagittis quam. Eros proin, viverra at. Nec morbi. Dapibus
          rutrum, at nam. Metus sed amet. Convallis metus a, sem curabitur nam.
          Molestie delectus temporibus, iaculis quisque nunc, per fusce. Dolor
          placerat, nec lorem ullamcorper.
        </CustomSpan>
      </CustomP>
      <p className="selectable">
        Etiam ligula ex, cursus in ante sit amet, facilisis pretium tortor. Ut
        mollis malesuada dui ut porta. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Maecenas sapien nulla, posuere eget ligula eu,
        consequat accumsan enim.
      </p>
    </SelectAll>

    <h2>
      <span>Acting on subelements supports other features too</span>
    </h2>
    <p className="doc">
      Event activation, handlers and other props are supported by sub-elements too.
    </p>
    <SelectAll className="demo" childSelection onSelect={(ev, text, toClipboard) => {
      writeTo(`You selected some text!

Triggered by: ${ev.type} event.
Copied to clipboard: ${toClipboard ? 'true' : 'false'}

Text selected:

${text}
`);
    }} selectOn="onClick" toClipboard>
      <p className="selectable">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        lacus feugiat tellus condimentum, eget lobortis mauris efficitur. Sed
        pharetra at diam non semper. Mauris vel nisi ligula.
      </p>
      <p className="selectable">
        Elit pede donec, vel at, vitae mi. In wisi felis. Duis blandit libero.
        Magnis penatibus dolor, nulla porttitor ut, facilisi elementum. Orci
        ultrices, cum diam dolor, nibh ipsum. Ac vestibulum, non tortor integer,
        sit accumsan. Eget ut est, sint commodo est, pellentesque felis. Erat
        id, eget elementum.
      </p>
      <CustomP style={{fontStyle: 'italic'}}>
        <CustomSpan>
          Eleifend ac a, laoreet morbi leo. In pretium wisi, volutpat et risus, id
          diam. Id sagittis quam. Eros proin, viverra at. Nec morbi. Dapibus
          rutrum, at nam. Metus sed amet. Convallis metus a, sem curabitur nam.
          Molestie delectus temporibus, iaculis quisque nunc, per fusce. Dolor
          placerat, nec lorem ullamcorper.
        </CustomSpan>
      </CustomP>
      <p className="selectable">
        Etiam ligula ex, cursus in ante sit amet, facilisis pretium tortor. Ut
        mollis malesuada dui ut porta. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Maecenas sapien nulla, posuere eget ligula eu,
        consequat accumsan enim.
      </p>
    </SelectAll>
  </div>
);

export default App;
