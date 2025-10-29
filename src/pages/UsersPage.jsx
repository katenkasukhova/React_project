import React, {useEffect, useState} from 'react'

const API_URL = 'https://6900d312ff8d792314bba5fb.mockapi.io/api/users';


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading,  setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const[formData,  setFormData] = useState({
        name: '',
        avatar: '',
        cat: ''
    });

useEffect(() => {
    fetchUsers();
}, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
            setLoading(false);

        } catch (error) {
            console.error('Ошибка загрузки:', error);
            setLoading(false);
        }
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const newUser = await response.json();
            setUsers([...users, newUser]);
            setFormData({name: '', avatar: '', cat: ''});            
        }
        catch(error){
            console.error('Ошибка добавления:', error);
        }
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/${editingId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const updatedUser = await response.json();
            setUsers(users.map(u => u.id == editingId ? updatedUser: u));
            setEditingId(null);
            setFormData({name: '', avatar: '', cat: ''});            
        }
        catch(error){
            console.error('ошибка добавления:', error);
        }
    };

    const handleDelete = async(id) => {
        if (!window.confirm('Удалить этого пользователя?')) return;
        try {
            await fetch(`${API_URL}/${id}`, {method: 'DELETE'});
            setUsers(users.filter(u => u.id !=id));
        }

        catch(error){
            console.error('Ошибка удаления:',  error);
        }
    };

    const startEdit = (user) => {
        setEditingId(user.id);
        setFormData({
            name: user.name,
            avatar: user.avatar,
            cat: user.cat
        });
    };

  return (
    <div>
        <h2 className='text-center mb-4'>Управление пользователями</h2>
        <div className='card mb-4'>
            <div className='card-body'>
                <h5 className='card-title'>{editingId ? 'Редактиррование пользователя': 'Добавление пользователя'}</h5>
                <form onSubmit={editingId ? handleUpdate : handleAdd}>
                    <div className='mb-3'>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Имя'
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required/>
                    </div>
                    <div className='mb-3'>
                        <input
                        type='url'
                        className='form-control'
                        placeholder='URL аватара'
                        value={formData.avatar}
                        onChange={(e) => setFormData({...formData, avatar: e.target.value})}
                        required/>
                    </div>  
                        <div className='mb-3'>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Любимая мохнатая жопка'
                        value={formData.cat}
                        onChange={(e) => setFormData({...formData, cat: e.target.value})}
                        required/>
                    </div>
                    <div className='d-flex gap-2'>
                        <button type='submit' className='btn btn-primary'>
                            {editingId ? 'Сохранить' : 'Добавить'}
                        </button>

                    </div>

                  </form>
            </div>

        </div>
        <h5 className='mb-3'>все пользователи ({users.length})</h5>
        <div className='row g-3'>
            {users.map((user) => (
                <div className='col-md-6' key={user.id}>
                    <div className='card h-100'>
                        <div className='card-body'>
                            <div className='d-flex align-items-start mb-3'>
                                <img
                                src={user.avatar}
                                alt={user.name}
                                className='rounded-circle'
                                width="64"
                                height="64"
                                style={{objectFit: 'cover'}}
                                ></img>
                                <div className='flex-grow-1'>
                                    <h5 className='card-title mb-1'>{user.name}</h5>
                                    <p className='card-text mb-0'>
                                        <b>Мохнатая жопа с хвостом: {user.cat}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer bg-transparent'>
                            <button 
                            className='btn btn-warning me-2' 
                            onClick={() => startEdit(user)}>Изменить</button>
                             <button 
                            className='btn btn-danger me-2' 
                            onClick={() => handleDelete(user)}>Удалить</button>                           
                        </div>
                    </div>

                </div>
            )
            )}
        </div>
    </div>
  )
}

export default UsersPage