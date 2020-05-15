# BACK END BUILD WEEK ⚡️⚡️⚡️ 

## Dependencies 
* bcryptjs
* connect-session-knex
* cors
* cross-env
* dotenv
* express
* express-session
* helmet
* jest
* jsonwebtoken
* knex
* knex-cleaner
* nodemon
* sqlite3
* supertest

## Access Link: 
[https://bw-weight-app.herokuapp.com/](https://bw-weight-app.herokuapp.com/)

###### All Routes are restricted routes, The login will create a token which will allow the user to go the routes.


### Register/Login

###### Seeded Data

```
        { firstName: "Harry", lastName:"Potter", email: "Harry@potter.com", password: "testing1"},
        { firstName: "Sirius", lastName:"Black", email: "Black@potter.com", password: "testing1"},
        { firstName: "Steve", lastName:"Rogers", email: "Avengers@stark.com", password: "testing1},
        { firstName: "Tony", lastName:"Stark", email: "Ironman@stark.com", password: "testing1},
```


| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| POST  | /api/register  | Creates a 'firstName', 'lastName', 'email, and 'password' sent inside the 'body' of the request. It Hashes the password before saves user to the database.  |
| POST  | /api/login  | Use 'email' and 'password' to log in. This will automatically create a Token and authenticate the user before logging in.  | 

#### Register User
```
{
	"firstName": "Harry",
	"lastName": "Potter",
	"email": "Harry@potter.com",
	"password": "testing1"
}
```
#### Login User
```
	"email": "Harry@potter.com",
	"password": "testing1"
```

### Users


| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /auth/users  | Will get a list of all users in the databse  |



| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /auth/users/:id  | Will get a single user by id  |


### EXERCISES 

###### Seeded Data
```
       { exercise: "Push ups", date: "01-01-20", userId: 1},
       { exercise: "Squats", date: "01-01-20", userId: 1 },

       { exercise: "Squats", date: "01-01-20", userId: 2 },
       { exercise: "Deadlift", date: "01-01-20", userId: 2},

       { exercise: "Bench Press", date: "01-01-20", userId: 3 },
       { exercise: "Pull Ups", date: "01-02-20", userId: 3 },
       { exercise: "Push ups", date: "01-03-20", userId: 3},
       { exercise: "Squats", date: "01-04-20", userId: 3 },

       { exercise: "Bicep Curl", date: "01-01-20", userId: 4},
       { exercise: "Military Press", date: "01-04-20", userId: 4 },
       { exercise: "Reverse Curl", date: "01-08-20", userId: 4 },
       { exercise: "Push ups", date: "01-08-20", userId: 4},
       { exercise: "Squats", date: "01-10-20", userId: 4},
```


| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /user/exercise/all  | Will get a list of ALL exercises. Will return every user.  |

 ``` 
  {
    "id": 1,
    "exercise": "Push ups",
    "date": "1-1-20",
    "userId": 1
  },
  ```
  
| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /user/:id/exercise/  | Will get a list of exercises for a specific user.  |

 ``` 
{
  "id": 2,
  "exercise": "Squats",
  "date": "1-1-20",
  "userId": 2
},
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| POST  | /user/:id/exercise/  | Will create an exercise for specific user.  |

 ``` 
{
  "id": 14,
  "exercise": "Dead-Lifts",
  "date": "1-10-20",
  "userId": 1
}
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| PUT  | /user/:id/exercise/:id  | Will update a specific exercise.  |

 ``` 
{
  "exercise": "Running",
  "date": "1-10-20",
}
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| DELETE  | /user/:id/exercise/:id | Will delete a specific exercise.  |

 ``` 
{
  "exercise": "Running",
  "date": "1-10-20",
}
  ```

### Exercise Information (WEIGHT, SETS, REPS, REGION, COMPLETED)

###### Seeded Data
```
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 1 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 2 },

       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 3 },
       { weight: "10lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 4 },

       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 5 },
       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 6 },
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 7 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 8 },

       { weight: "30lbs", reps: 1, sets: 1, region: "arm", completed: false, exerciseId:  9 },
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 10 },
       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 11 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 12 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 13 },
```


| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /exercise/all/info/  | Will get a list of ALL exercises Info. Will return all infomation for each exercise created.  |

 ``` 
  {
    "id": 1,
    "weight": "10lbs",
    "reps": 1,
    "sets": 1,
    "region": "arms",
    "completed": false,
    "exerciseId": 1
  },
  ```
  
| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /exercise/info/:id/  | Will get exercises information for a specific infomations's id. Will show exercise which it belongs too. |

 ``` 
  {
    "id": 1,
    "weight": "10lbs",
    "reps": 1,
    "sets": 1,
    "region": "arms",
    "completed": false,
    "exerciseId": 1,
    "exercise": "Push ups"
  },
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| GET  | /exercise/:id/info/  | Will get a specific exercise's information. Will show all info with the exercise name. |

 ``` 
   {
    "id": 2,
    "weight": "30lbs",
    "reps": 1,
    "sets": 1,
    "region": "legs",
    "completed": false,
    "exerciseId": 2,
    "exercise": "Dead-Lifts"
  }
  ``` 

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| POST  | /exercise/:id/info/  | Will create information for specific exercise.  |

 ``` 
{
		"weight": "50lbs",
    "reps": 10,
    "sets": 10,
    "region": "chest",
		"completed": "false"
}
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| PUT  | /exercise/:id/info/:id  | Will update a specific exercise information.  |

 ``` 
{

}
  ```

| Method  | Endpoint | Description  | 
| ------------- | ------------- |------------- | 
| DELETE  | /exercise/info/:id | Will delete a specific exercise information.  |

 ``` 
{
  "removed"
}
  ```



