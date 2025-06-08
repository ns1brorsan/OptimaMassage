document.addEventListener('DOMContentLoaded', function () {
  // Slideshow
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 4000);
  }

  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Simple chat widget
  const chatToggle = document.getElementById('chat-toggle');
  const chatContainer = document.getElementById('chat-container');
  const chatInputField = document.querySelector('#chat-input input');
  const chatSend = document.querySelector('#chat-input button');
  const chatMessages = document.getElementById('chat-messages');

  function sendMsg() {
    const text = chatInputField.value.trim();
    if (!text) return;
    const userDiv = document.createElement('div');
    userDiv.textContent = 'Du: ' + text;
    chatMessages.appendChild(userDiv);
    chatInputField.value = '';
    const botDiv = document.createElement('div');
    botDiv.textContent = 'Bot: Tack f\u00f6r ditt meddelande! Vi svarar s\u00e5 snart vi kan.';
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (chatToggle) {
    chatToggle.addEventListener('click', () => {
      if (chatContainer.style.display === 'flex') {
        chatContainer.style.display = 'none';
      } else {
        chatContainer.style.display = 'flex';
        chatInputField.focus();
      }
    });
    chatSend.addEventListener('click', sendMsg);
    chatInputField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') sendMsg();
    });
  }
});
