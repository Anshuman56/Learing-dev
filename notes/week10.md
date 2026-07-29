## Day 64 — MonDay (27 july)

Time spent: 3h 10m
Energy (1–10): 5

### What I built/learned today

- why hash a password insted encrypt password? If we store pasword in pain text in database without hash, if someone access to our data base can see users password and users mainly use one password for everything. So when user password hash store in our database no one figer our the original password. Same password has defferent hash becuse of salt. So encrypt needed but when store password you have to hashed first. So encrypt password is reversable mean when a password encrypt there is a key to decrypt but hash is one-way there is no decryption in hash passwords.

### What confused me

- Nothing.

### One thing that clicked

- How to hash password in bcrypt and compare them with pain text.

### Tomorrow's first task

- Read jwt.io/introduction

### Stuck on / need to revisit

- Nothing

## Day 65 — TuesDay (28 july)

Time spent: 3h 10m
Energy (1–10): 5

### What I built/learned today

- The difference between decode and verifying is. If we decode a jwt token it will give the payload but if you verifying with a signeture if the signeture is worng it will not decode the payload.

### What confused me

- why we need jwt?

### One thing that clicked

- How to verify and decode a token.

### Tomorrow's first task

- Build register + login endpoints

### Stuck on / need to revisit

- Nothing

## Day 66 — WednesDay (28 july)

Time spent: 3h 10m
Energy (1–10): 5

### What I built/learned today

- I buld my first login and register api in express when you hit the register router you will sign in with you email and password and after that if you hit the login route you can give your password and login to login into site. if the email and password wrong it will give you error.

### What confused me

- Nothing.

### One thing that clicked

- How every site do login.

### Tomorrow's first task

- Read expressjs.com → "Writing middleware"

### Stuck on / need to revisit

- Nothing
