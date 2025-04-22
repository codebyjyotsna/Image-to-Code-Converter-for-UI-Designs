from fastapi import FastAPI, File, UploadFile
from backend.model.vision_transformer import process_image
from backend.api.code_generator import generate_code

app = FastAPI()

@app.post("/generate")
async def generate_ui_code(file: UploadFile = File(...)):
    # Read the uploaded image
    contents = await file.read()

    # Process the image through the model
    ui_structure = process_image(contents)

    # Generate HTML/CSS/React code
    generated_code = generate_code(ui_structure)

    return {"code": generated_code}
