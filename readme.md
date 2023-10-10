### User Signup/Login

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION        | POST PARAMS                                                                                                         | RETURNS                |
|--------|-------------------|-------|-------|--------------------|---------------------------------------------------------------------------------------------------------------------|------------------------|
| POST   | /auth/signup      | -     | user  | User Signup        | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | { token: `token` }     |
| POST   | /auth/login       | -     | user  | User Login         | `DNI`, `password`                                                                                                   | { token: `token` }     |

### User Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE  | DESCRIPTION               | POST PARAMS                                                                                                         | RETURNS                           |
|--------|--------------------|-------|-------|---------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| GET    | /user              | YES   | user  | Get All Users             | `query params`                                                                                                      | [{user}]                          |
| GET    | /user/profile      | YES   | user  | Get Own Profile           |                                                                                                                     | {user}                            |
| GET    | /user/:userId      | YES   | admin | Get One User              |                                                                                                                     | {user}                            |
| POST   | /user              | YES   | admin | Create one User           | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {user}                            |
| PUT    | /user/profile      | YES   | user  | Update own profile        | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {message: 'Profile updated'}       |
| PUT    | /user/password     | YES   | user  | Reset password            | `newPassword`, `repeatPassword`                                                                                   | { message: 'Password updated' }   |
| PUT    | /user/:userId      | YES   | admin | Update one user           | `DNI`, `name`, `last_name`, `password`, `role`, `committee`, `contact_number`, `category`, `email`                  | {message: 'User updated'}         |
| DELETE | /user/:userId      | YES   | admin | Delete one user           |                                                                                                                     | {message: 'User deleted'}         |
| DELETE | /user/profile      | YES   | user  | Delete own profile        |                                                                                                                     | {message: 'Profile deleted'}       |

### Referee_stats Endpoints

| METHOD | ENDPOINT          | TOKEN | ROLE | DESCRIPTION               | POST PARAMS                                                                                                         | RETURNS                |
|--------|-------------------|-------|------|---------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------|
| GET    | /stats            | YES   | user | Get All Referee stats     | `query params`                                                                                                      | [{stats}]              |
| GET    | /stats/profile    | YES   | user | Get Own Referee stats     |                                                                                                                     | {stats}                |
| GET    | /stats/:statsId   | YES   | user | Get One Referee stats     |                                                                                                                     | {stats}                |
| POST   | /stats            | YES   | admin| Create one Referee stats  | `Goals_away`, `Goals_local`, `red_card`, `yellow_card`, `penalties`, `referee_score`, `wrong_offside`, `correct_offside`, `intervention` | {stats} |
| PUT    | /stats/:statsId   | YES   | admin| Update one Referee stats  | `Goals_away`, `Goals_local`, `red_card`, `yellow_card`, `penalties`, `referee_score`, `wrong_offside`, `correct_offside`, `intervention` | {message: 'stats updated'} |
| DELETE | /stats/:statsId   | YES   | admin| Delete one Referee stats  |                                                                                                                     | {message: 'stats deleted'} |

### Referee_team Endpoints

| METHOD | ENDPOINT                      | TOKEN | ROLE  | DESCRIPTION               | POST PARAMS                                     | RETURNS                   |
|--------|-------------------------------|-------|-------|---------------------------|-------------------------------------------------|---------------------------|
| GET    | /refereeTeam                  | YES   | user  | Get All Referee teams     | `query params`                                  | [{refereeTeam}]           |
| GET    | /refereeTeam/:refereeTeamId  | YES   | user  | Get One Referee Team      |                                                 | {refereeTeam}             |
| GET    | /refereeTeam/profile          | YES   | user  | Get Own Referee Team      |                                                 | {refereeTeam}             |
| POST   | /refereeTeam                  | YES   | admin | Create one Referee Team   | `members`, `location`                          | {refereeTeam}             |
| PUT    | /refereeTeam/:refereeTeamId  | YES   | admin | Update one Referee Team   | `members`, `location`                          | {message: 'Team updated'} |
| DELETE | /refereeTeam/:refereeTeamId  | YES   | admin | Delete one Referee Team   |                                                 | {message: 'Team deleted'} |

### FootBall_Match Endpoints

| METHOD | ENDPOINT                            | TOKEN | ROLE  | DESCRIPTION                | POST PARAMS                                     | RETURNS                        |
|--------|-------------------------------------|-------|-------|----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /footballMatch                      | YES   | user  | Get All Football Match     | `query params`                                  | [{footballMatch}]               |
| GET    | /footballMatch/:footballMatchId      | YES   | user  | Get One Football Match      |                                                 | {footballMatch}                |
| GET    | /footballMatch/profile              | YES   | user  | Get Own Football Matchs     |                                                 | {footballMatch}                |   
| POST   | /footballMatch                      | YES   | admin | Create One Football Match   | `date`, `goals_Away`, `goals_Local`, `redCard_Local`,`redCard_Away`,`penalties`  | {footballMatch}                |
| PUT    | /footballMatch/:footballMatchId      | YES   | admin | Update One Football Match   | `date`, `goals_Away`, `goals_Local`, `redCard_Local`,`redCard_Away`,`penalties`  | {message: 'Football Match updated'} |
| DELETE | /footballMatch/:footballMatchId      | YES   | admin | Delete one Football Match    |                                                 | {message: 'Football Match updated'} |

### Team Endpoints

| METHOD | ENDPOINT                           | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                     | RETURNS                        |
|--------|------------------------------------|-------|-------|-----------------------------|-------------------------------------------------|--------------------------------|
| GET    | /team                              | YES   | user  | Get All Teams               | `query params`                                  | [{team}]                       |
| GET    | /team/:teamId                      | YES   | user  | Get One Team                |                                                 | {team}                         |
| POST   | /team                              | YES   | admin | Create One Team              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {team}                |
| PUT    | /team/:teamId                      | YES   | admin | Update One Team              | `club_Name`,`player_sheets`, `coach`, `location`, `sending_off`  | {message: 'Team updated'} |
| DELETE | /team/:teamId                      | YES   | admin | Delete one Team              |                                                 | {message: 'Team deleted'}    |

