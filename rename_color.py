import os

def replace_in_files(directory, old_text, new_text):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                if old_text in content:
                    content = content.replace(old_text, new_text)
                    with open(filepath, 'w') as f:
                        f.write(content)

# Replace in globals.css specifically first for the value
with open('src/app/globals.css', 'r') as f:
    css = f.read()
css = css.replace('--color-primary-blue: #246BFD;', '--color-primary-accent: #64D21E;')
with open('src/app/globals.css', 'w') as f:
    f.write(css)

# Update all source files (including globals.css again for any usage of 'primary-blue')
replace_in_files('src', 'primary-blue', 'primary-accent')
