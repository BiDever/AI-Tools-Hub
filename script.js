
    function filterTools() {
      const search = document.getElementById("search").value.toLowerCase();
      const tools = document.querySelectorAll(".tool-card");
      tools.forEach(tool => {
        const name = tool.dataset.name.toLowerCase();
        if (name.includes(search)) {
          tool.style.display = "block";
        } else {
          tool.style.display = "none";
        }
      });
    }
    