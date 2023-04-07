// Find all code blocks with the class language-mermaid
document.querySelectorAll('pre > code.language-mermaid').forEach(function(codeBlock) {
    // Get the text content of the code block
    let code = codeBlock.textContent;

    // Create a new div to hold the mermaid diagram
    let mermaidDiv = document.createElement('div');

    // Add the mermaid class to the div
    mermaidDiv.classList.add('mermaid');

    // Center the diagram
    mermaidDiv.style.textAlign = 'center';

    // Add the mermaid diagram code to the div
    mermaidDiv.textContent = code;

    // Replace the original code block with the new mermaid div
    let preBlock = codeBlock.parentElement;
    preBlock.parentNode.replaceChild(mermaidDiv, preBlock);
});
