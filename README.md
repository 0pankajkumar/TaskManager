# TaskManager WebApp
## How to run
  - In `backend_flask` folder run flask server using `flask run`. All python libraries required as in requirements.txt
  - Use `npm start` for running a dev environment using node
## Backend 
  ### Data to be stored
  - id : int - unique identifier for a task (Primary key)
  - task : str - Task name
  - eta : str - a set of perdefined enums 
  - timestamp : datetime - epoch time for the event
  
  ### CAP Priorities
  - Choosing availablity over consistency since a person might be interested in having a glace at tasks & do quick updates
  - Partition tolerance
  
  ### Models possible
  - A single database table with updates happening at the particular task row
    - Advantages:
      - Single source of truth.
      - Audit trial becomes difficult. We can have a new row added for each update where `id` can be indexing criteria.
    - Disadvantages:
      - Duplication of data
    
  - A table for tasks and another table for Audit trail (Choosen)
    - Advantages:
      - Separation of concerns. Audit trial is handled separately.
    - Disadvantages:
      - An event will involve multiple table updates
      
 ## Frontend
   - Making react components for various task board parts
   - Frontend is a single page application which can be readily avilable via CDNs
   - Frontend will talk to backend to via REST APIs for data in JSON format.
