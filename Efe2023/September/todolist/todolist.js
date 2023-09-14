// Görevleri depolamak için bir dizi oluşturun
let tasks = [];

// Sayfa yüklendiğinde mevcut görevleri alın ve listeye ekleyin
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const taskData = localStorage.getItem('tasks');
    if (taskData) {
        tasks = JSON.parse(taskData);
        updateTaskList();
    }
});

// Yeni görev ekleme işlevi
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        updateTaskList();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Görev listesini güncelleme işlevi
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-button" onclick="deleteTask(${index})">Sil</button>
        `;
        taskList.appendChild(li);
    });
}

// Görev silme işlevi
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
