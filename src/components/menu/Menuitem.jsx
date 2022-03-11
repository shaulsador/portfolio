import React from 'react';

function Menuitem({ item, open, setOpen }) {
	return (
		<li onClick={() => setOpen(!open)}>
			<a href={`#${item}`}>{`${item}`}</a>
		</li>
	);
}

export default Menuitem;
