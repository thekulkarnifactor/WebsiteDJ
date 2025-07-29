from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        print("mail: ", app.config['MAIL_USERNAME'])
        data = request.get_json()
        
        # Create email message
        msg = Message(
            subject=f"Contact Form: {data['subject']}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['harishkulkarni0101@gmail.com']  # Replace with actual email
        )
        
        msg.body = f"""
        Name: {data['name']}
        Email: {data['email']}
        Phone: {data['phone']}
        Subject: {data['subject']}
        
        Message:
        {data['message']}
        """
        
        mail.send(msg)
        print("Email sent successfully")
        return jsonify({'success': True, 'message': 'Message sent successfully'})
    
    except Exception as e:
        print("Email failed successfully")
        return jsonify({'success': False, 'message': 'Failed to send message'}), 500

@app.route('/api/articles', methods=['GET'])
def get_articles():
    articles = [
        {
            'id': 1,
            'title': 'Understanding Corporate Law in Modern Business',
            'excerpt': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'date': '2024-01-15',
            'author': 'Pratik Date'
        },
        {
            'id': 2,
            'title': 'Recent Developments in Intellectual Property Rights',
            'excerpt': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'date': '2024-01-10',
            'author': 'Dhananjay Joshi'
        },
        {
            'id': 3,
            'title': 'Navigating Employment Law Complexities',
            'excerpt': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            'date': '2024-01-05',
            'author': 'Legal Team'
        }
    ]
    return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
