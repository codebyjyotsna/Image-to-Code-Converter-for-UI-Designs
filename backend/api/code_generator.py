def generate_code(ui_structure):
    # Convert UI structure to HTML/CSS/React code
    html_code = ""
    for element in ui_structure["elements"]:
        if element["type"] == "button":
            html_code += f'<button style="color:{element["styles"]["color"]};">{element["text"]}</button>\n'
        elif element["type"] == "input":
            html_code += f'<input placeholder="{element["placeholder"]}" />\n'
    return html_code
