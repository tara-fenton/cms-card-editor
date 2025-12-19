import { useState, useEffect } from 'react';

export default function EditorForm({ item, onSave }) {
    const [form, setForm] = useState(item);

    useEffect(() => {
        setForm(item);
    }, [item])

    if (!form) return <p>Select a content block</p>;

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea
                name="body"
                value={form.body}
                onChange={handleChange}
            />
            <select name="status" value={form.status} onChange={handleChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
            </select>

            <button onClick={() => onSave(form)}>Save</button>
        </div>
    )
}