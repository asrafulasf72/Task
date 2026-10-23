// Add
setItems(prev => [...prev, newItem]);

// Remove
setItems(prev => prev.filter(item => item.id !== id));

// Update object
setItems(prev =>
  prev.map(item =>
    item.id === id
      ? { ...item, property: newValue }
      : item
  )
);

// Update nested object
setItems(prev =>
  prev.map(item =>
    item.id === id
      ? {
          ...item,
          nested: {
            ...item.nested,
            property: newValue
          }
        }
      : item
  )
);