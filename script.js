document.getElementById("rec-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("rec-input");
    const newText = input.value.trim();

    if(newText) {
        const li document.createElement("li");
        li.textContent = newText;
        document.getElementById("rec-list").appendchild(li);

        alert("Thanks for your response!");
        input.value = "";
    }
});