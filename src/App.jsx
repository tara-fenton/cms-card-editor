import { useContent } from './hooks/useContent'
import ContentList from "./components/ContentList";
import EditorForm from "./components/EditorForm"

function App() {
  const {
    items,
    setFilter,
    selectedItem,
    setSelectedId,
    updateItem
  } = useContent();

  return (
    <div className="layout">
      <aside>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <ContentList items={items} onSelect={setSelectedId} />
      </aside>

      <main>
        <EditorForm item={selectedItem} onSave={updateItem} />

        <div className="accordion">
          <div className="accordion__header">Preview</div>
          <div className="accordion__body">
            {selectedItem ? (
              <>
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.body}</p>
              </>
            ) : (
              <em>No selection</em>
            )}
          </div>        </div>
      </main>
    </div>
  )
}

export default App
