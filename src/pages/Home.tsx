import { valueToNode } from '@babel/types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const Task={
      id:new Date().getTime(),
      title:newTaskTitle,
      done:false,
    }
    setTasks(oldvalue=> [...oldvalue, Task] )
  }

  function handleToggleTaskDone(id: number) {
    const toggle = tasks.filter((task)=>{
      if(task.id === id){
        task.done = !task.done
      }
      return task
    }
    )
    setTasks(toggle)
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task)=>{
      if(task.id !== id){
        return task;
      }
      })
    setTasks(newTasks)}
  

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})