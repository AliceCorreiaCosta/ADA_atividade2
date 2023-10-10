document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    
    if (itemName.trim() !== '') {
      addItemToList(itemName);
      document.getElementById('itemName').value = '';
    }
  });
  
  function addItemToList(itemName) {
    const itemList = document.getElementById('itemList');
    
    const li = document.createElement('li');
    li.textContent = itemName;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
      itemList.removeChild(li);
    });
    
    li.appendChild(removeButton);
    itemList.appendChild(li);
  }
  