import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'

const UserData = () => {
    const auth = localStorage.getItem('user');
    const parsedname = JSON.parse(auth);
    const [changing, setChanging] =  useState(false);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');


    const settingchange = () =>{
        setChanging(true)
    }


    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ || null;
        return passwordRegex.test(password);
    };

    const isValidName = (name) => {
        const nameRegex = /^[A-Za-z\s]+$/ || null;
        return nameRegex.test(name);
    }

    const updateUser = async () => {
        if(!newName){
            setNewName(parsedname.name)
        }
        if(!newPassword){
            setNewPassword(parsedname.password)
        }
        const updatedUser = {
            name: newName,
            password: newPassword
        };

        if (!isValidPassword(newPassword) && newPassword.length > 0) {
            console.log(newPassword, 'daddy')
            alert('Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.');
            return;
        }

        if (!isValidName(newName) && newName.length > 0) {
            alert('name should not contain numbers or special charachters')
            return;
        }
    

        try {
            let response = await fetch('http://localhost:5000/users/' + parsedname.email, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });
            let result = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(result.user));
                setChanging(false);
            } else {
                console.log(result.message);
            }
        } catch (error) {
            console.log( error);
        }
    };


    const normalfields = (
     <div>
                    <div className="userfieldsdiv">
                <h1>{parsedname.name}</h1>
                <h1 className="title"> :שם המשתמש</h1>
            </div>
            <div className="userfieldsdiv">
                <h1>{parsedname.email}</h1>
                <h1 className="title">:אימייל המשתמש</h1>
            </div>
            <div className="userfieldsdiv">
                <h1>{parsedname.password}</h1>
                <h1 className="title"> :סיסמת המשתמש</h1>
            </div>
            <button onClick={settingchange} className="buttonforchange">
                want to change something?
            </button>
    </div>
    )

    const inputfields = (
    <div>
                    <div className="userfieldsdiv">
                <input placeholder={parsedname.name} onChange={(e) => setNewName(e.target.value)}></input>
                <div></div>
                <h1 className="title"> :שם חדש למשתמש</h1>
            </div>
            <div className="userfieldsdiv">
                <h1>{parsedname.email}</h1>
                <h1 className="title">:אימייל המשתמש</h1>
            </div>
            <div className="userfieldsdiv">
                <input placeholder={parsedname.password} onChange={(e) => setNewPassword(e.target.value)}></input>
                <h1 className="title">:סיסמה חדשה למשתמש</h1>
            </div>
            <button onClick={updateUser} className="buttonforchange">
                change user information
            </button>
    </div>
    )
    


    return (
        <div className="userdatacontainer">
            {changing ? inputfields : normalfields}
        </div>
    );
};

export default UserData;
