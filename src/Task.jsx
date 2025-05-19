import { useState } from 'react';

const TaskManager = () => {
  // Initial task state
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      title: 'my taskewer',
      description: 'this is a vdfgbnbvjmnbnm',
      tags: ['Js', 'Html'],
      priority: 'High',
      starred: false
    }
  ]);
  
  // State for currently selected task (for editing)
  const [selectedTask, setSelectedTask] = useState(null);
  
  // State for form visibility
  const [formVisible, setFormVisible] = useState(false);
  
  // State to track if we're editing or adding
  const [isEditing, setIsEditing] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    priority: 'Medium'
  });
  
  // Toggle star status
  const toggleStar = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, starred: !task.starred } : task
    ));
  };
  
  // Start editing a task
  const startEditing = (task) => {
    setSelectedTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      tags: task.tags.join(', '),
      priority: task.priority
    });
    setIsEditing(true);
    setFormVisible(true);
  };
  
  // Start adding a new task
  const startAddingTask = () => {
    setFormData({
      title: '',
      description: '',
      tags: '',
      priority: 'Medium'
    });
    setIsEditing(false);
    setFormVisible(true);
  };
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Cancel form
  const cancelForm = () => {
    setFormVisible(false);
    setSelectedTask(null);
  };
  
  // Process form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process tags from comma-separated string to array
    const processedTags = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
      
    if (isEditing && selectedTask) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === selectedTask.id ? {
          ...task,
          title: formData.title,
          description: formData.description,
          tags: processedTags,
          priority: formData.priority
        } : task
      ));
    } else {
      // Add new task
      const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        title: formData.title,
        description: formData.description,
        tags: processedTags,
        priority: formData.priority,
        starred: false
      };
      setTasks([...tasks, newTask]);
    }
    
    // Reset form state
    setFormVisible(false);
    setSelectedTask(null);
  };
  
  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Delete all tasks
  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Your Tasks</h1>
          <div className="space-x-3">
            <button 
              onClick={startAddingTask}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
            <button 
              onClick={deleteAllTasks}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete All
            </button>
          </div>
        </div>
        
        {/* Form Section - Only visible when adding/editing */}
        {formVisible && (
          <div className="mb-8 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? 'Edit Task' : 'Add New Task'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Js, Html, CSS"
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button 
                  type="button"
                  onClick={cancelForm}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  {isEditing ? 'Save Changes' : 'Add Task'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Tasks Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 w-12"></th>
                <th className="pb-4">Title</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Tags</th>
                <th className="pb-4">Priority</th>
                <th className="pb-4">Options</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id} className="border-t border-gray-700">
                  <td className="py-4 px-2">
                    <button 
                      onClick={() => toggleStar(task.id)}
                      className={`${task.starred ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={task.starred ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </button>
                  </td>
                  <td className="py-4">{task.title}</td>
                  <td className="py-4">{task.description}</td>
                  <td className="py-4">
                    <div className="flex space-x-1">
                      {task.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`px-2 py-1 rounded-full text-xs font-medium 
                          ${tag === 'Js' ? 'bg-green-500 text-green-100' : 
                           tag === 'Html' ? 'bg-teal-500 text-teal-100' : 'bg-blue-500 text-blue-100'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4">
                    <span 
                      className={`
                        ${task.priority === 'High' ? 'text-red-400' : 
                        task.priority === 'Medium' ? 'text-yellow-400' : 'text-green-400'}
                      `}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => deleteTask(task.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        Delete
                      </button>
                      <button 
                        onClick={() => startEditing(task)}
                        className="text-blue-500 hover:text-blue-400"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;