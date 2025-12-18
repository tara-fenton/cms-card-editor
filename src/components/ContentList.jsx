import React from 'react';

const ContentList = React.memo(({ items, onSelect }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onSelect(item.id)}>
                    <strong>{item.title}</strong> - {item.status}
                </li>
            ))}
        </ul>
    )
})

export default ContentList;