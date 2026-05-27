const list = document.getElementById("list");
    const addBtn = document.getElementById("addBtn");
    const input = document.getElementById("itemInput");

   
    addBtn.addEventListener("click", () => {
      const value = input.value.trim();
      if (!value) return;

      const li = document.createElement("li");
      li.innerHTML = `
        ${value}
        <button class="delete-btn">Remove</button> 
      `;

      list.appendChild(li); 
      input.value = ""; 
    });

    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const li = e.target.closest("li");
        li.remove();
      }
    });