The Data Access Object (DAO) is basically an object or an interface that provides access to an underlying database or any other persistence storage.

This way we avoid having to change the SQL Query in every call, instead, we provide a skeleton with parameters to every endpoint and we edit only the Dao file if a change is needed.