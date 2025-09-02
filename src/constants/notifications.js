// Initial set of notifications (first page)
export const initialNotifications = [
  {
    id: 1,
    title: 'New User Registered',
    message: 'John Doe has just signed up.',
    time: '2 min ago',
    read: false,
    type: 'user',
    icon: '👤'
  },
  {
    id: 2,
    title: 'New Report',
    message: 'You have 5 new reports to review.',
    time: '1 hour ago',
    read: false,
    type: 'report',
    icon: '📝'
  },
  {
    id: 3,
    title: 'System Update',
    message: 'New dashboard update is available.',
    time: '3 hours ago',
    read: true,
    type: 'system',
    icon: '🔄'
  },
  {
    id: 4,
    title: 'New Message',
    message: 'You have a new message from support team.',
    time: '5 hours ago',
    read: true,
    type: 'message',
    icon: '✉️'
  }
];

// Additional notifications that can be loaded when viewing all
const additionalNotifications = [
  {
    id: 5,
    title: 'New Comment',
    message: 'A new comment was added to your post.',
    time: 'Yesterday',
    read: true,
    type: 'comment',
    icon: '💬'
  },
  {
    id: 6,
    title: 'Payment Received',
    message: 'Your affiliate payment of $150 has been processed.',
    time: 'Yesterday',
    read: true,
    type: 'payment',
    icon: '💰'
  },
  {
    id: 7,
    title: 'New Follower',
    message: 'You have 3 new followers this week.',
    time: '2 days ago',
    read: true,
    type: 'follower',
    icon: '👥'
  },
  {
    id: 8,
    title: 'System Maintenance',
    message: 'Scheduled maintenance this weekend.',
    time: '3 days ago',
    read: true,
    type: 'system',
    icon: '🔧'
  }
];

// Function to get all notifications (for view all)
export const getAllNotifications = () => {
  return [...initialNotifications, ...additionalNotifications];
};

// Function to generate a new notification (for testing)
export const generateNewNotification = () => {
  const types = [
    { type: 'user', icon: '👤', messages: ['has just signed up.', 'created a new account.'] },
    { type: 'report', icon: '📝', messages: ['New report submitted.', 'Report needs review.'] },
    { type: 'message', icon: '✉️', messages: ['sent you a message.', 'replied to your message.'] },
    { type: 'system', icon: '🔄', messages: ['Update available.', 'Maintenance scheduled.'] },
  ];
  
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomMessage = randomType.messages[Math.floor(Math.random() * randomType.messages.length)];
  const randomUser = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey'][Math.floor(Math.random() * 5)];
  
  return {
    id: Date.now(),
    title: randomType.type === 'user' ? `New User: ${randomUser}` : 
           randomType.type === 'system' ? 'System Update' :
           randomType.type === 'message' ? `Message from ${randomUser}` :
           'New Report',
    message: randomType.type === 'user' ? `${randomUser} ${randomMessage}` : 
             randomType.type === 'message' ? `${randomUser} ${randomMessage}` :
             randomMessage,
    time: 'Just now',
    read: false,
    type: randomType.type,
    icon: randomType.icon
  };
};
