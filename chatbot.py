from flask import Flask, jsonify, request, render_template
import random

# Initialize Flask app
app = Flask(__name__)

# Predefined chatbot responses
responses = [
    "Hello! How can I help you today?",
    "I'm a chatbot, nice to meet you!",
    "What can I do for you?",
    "I'm here for a chat, what's on your mind?"
]

# Serve the HTML page
@app.route('/')
def home():
    return render_template('index.html')

# Route to handle chatbot requests
@app.route('/chatbot', methods=['GET'])
def chatbot():
    user_message = request.args.get('message', '')
    
    if user_message:
        # Simulate a chatbot response from predefined responses
        response = random.choice(responses)
        return jsonify({"response": response})
    
    return jsonify({"response": "Say something!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
