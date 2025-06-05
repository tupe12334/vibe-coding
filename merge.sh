#!/bin/bash

# Output file name
OUTPUT_FILE="Agents.md"

# Clear or create the output file
echo "# Merged Markdown Files" > "$OUTPUT_FILE"
echo "Generated on $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Find all markdown files except README.md and the output file
for file in $(find . -name "*.md" ! -name "README.md" ! -name "$OUTPUT_FILE" -type f | sort)
do
    # Get just the filename from the path
    filename=$(basename "$file")
    
    echo "Processing: $filename"
    
    # Add a header with the filename
    echo "" >> "$OUTPUT_FILE"
    echo "## File: $filename" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    # Add the file content
    cat "$file" >> "$OUTPUT_FILE"
    
    # Add a separator
    echo "" >> "$OUTPUT_FILE"
    echo "---" >> "$OUTPUT_FILE"
done

echo "Merged all markdown files into $OUTPUT_FILE"
