import os
import json

# Define the directory containing the JSON files
directory_path = 'src/website/bodyComponents/blogs/all_blogs'

# Ensure the directory exists
if not os.path.isdir(directory_path):
    print(f"The directory {directory_path} does not exist.")
    exit(1)

# Get all JSON files in the directory
json_files = [f for f in os.listdir(directory_path) if f.endswith('.json')]

# Prepare the content for AllBlogs.js
imports_content = ''
exports_content = 'export const AllBlogs = [\n'

for json_file in json_files:
    name_of_file = os.path.splitext(json_file)[0]
    imports_content += f"import {name_of_file} from './all_blogs/{json_file}';\n"
    exports_content += f"    {{path: '{name_of_file}', data: {name_of_file}}},\n"

exports_content += '];'

# Combine imports and exports to form the final content
all_blogs_content = f"{imports_content}\n{exports_content}"

# Path to save
path_to_save = 'src/website/bodyComponents/blogs'

# Path to the AllBlogs.js file
all_blogs_path = os.path.join(path_to_save, 'AllBlogs.js')

# Write the content to AllBlogs.js
with open(all_blogs_path, 'w') as file:
    file.write(all_blogs_content)

print('AllBlogs.js has been generated successfully.')
