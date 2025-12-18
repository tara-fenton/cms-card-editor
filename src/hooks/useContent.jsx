import { useState, useEffect, useMemo } from 'react';
import data from '../data/content.json';

export function useContent() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        setItems(data)
    }, [])

    const filteredItems = useMemo(() => {
        if (filter === "all") return items;
        return items.filter(i => i.status === filter);
       
    }, [items, filter])

    const selectedItem = items.find(i => i.id === selectedId) || null;

    const updateItem = (updated) => {
        setItems(prev => 
            prev.map(i => (i.id === updated.id ? { ...updated, updatedAt: new Date().toISOString() } : i))
        )
    }

    return {
        items: filteredItems,
        setFilter,
        selectedItem,
        setSelectedId,
        updateItem
    }
}
