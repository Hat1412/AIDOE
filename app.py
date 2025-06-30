from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests


@app.route("/submit", methods=["POST"])
def submit_form():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not all([name, email, message]):
        return jsonify({"success": False, "message": "Missing fields"}), 400

    # Process the form data (e.g., send email or save to database)
    print(f"Received: Name={name}, Email={email}, Message={message}")

    return jsonify({"success": True, "message": "Form submitted successfully!"})


if __name__ == "__main__":
    app.run(debug=True)
