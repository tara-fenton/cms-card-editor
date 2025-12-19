import React from 'react';

const ContentList = React.memo(({ items, onSelect }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onSelect(item.id)}
                    style={{
                        padding: "10px 8px",
                        border: "1px solid #eee",
                        borderRadius: 8,
                        marginBottom: 8,
                        cursor: "pointer",
                        background: "white",
                    }}>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{item.status}</div>
                </li>
            ))}
        </ul>
    )
})

export default ContentList;