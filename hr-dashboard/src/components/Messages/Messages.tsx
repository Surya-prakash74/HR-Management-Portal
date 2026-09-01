import { Mail } from 'lucide-react';
import { messages } from '../../data';
import '../shared/shared.css';
import './Messages.css';

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Messages() {
  return (
    <div>
      <div className="page-title">
        <Mail size={20} />
        <h2>Messages</h2>
      </div>

      <section className="card message-card">
        {messages.map((m) => (
          <div className={`message-row${m.unread ? ' unread' : ''}`} key={m.id}>
            <span className="message-avatar">{initials(m.sender)}</span>
            <div className="message-body">
              <div className="message-top">
                <span className="message-sender">{m.sender}</span>
                <span className="message-time">{m.time}</span>
              </div>
              <div className="message-subject">{m.subject}</div>
              <div className="message-preview">{m.preview}</div>
            </div>
            {m.unread && <span className="message-dot" />}
          </div>
        ))}
      </section>
    </div>
  );
}