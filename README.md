# manual-HTTP-Angel-DB-Pablo-BL

## Peticiones ThunderClient

### GET

Se introduce la direccion de nuestra API local en dirección a 'students'.
![get](images/thunderclient/get/get1.png)

Resultado:
![get](images/thunderclient/get/get1.png)

---

### GET ID

Se introduce la dirección con el siguiente parámetro que apunta al student con id=1
![getid](images/thunderclient/getid/getid1.png)

El resultado es que nos muestre únicamente ese student:
![getid](images/thunderclient/getid/getid2.png)

---

### POST

Introducimos en el body el student que vamos a postear en nuestra API.
![post](images/thunderclient/post/post1.png)

Introducimos también el header 'Content-Type: application/json', esto es para aclarar que lo que introducimos en el body se escribe en lenguaje JSON.
![post](images/thunderclient/post/post2.png)

Resultado:
![post](images/thunderclient/post/post3.png)

---

### PUT

Introducimos todos los valores que queramos cambiar de un student.
![put](images/thunderclient/put/put1.png)

Importante el header.
![put](images/thunderclient/put/put2.png)

---

### PATCH

Introducimos el único campo que queramos cambiar.
![patch](images/thunderclient/patch/patch1.png)

Con su correspondiente header
![patch](images/thunderclient/patch/patch2.png)


---

### DELETE

Introducimos la URL apuntando al student que queremos eliminar.
![delete](images/thunderclient/delete/delete1.png)

Podemos comprobar que tras hacer el request no se encuentra el student puesto que ha sido eliminado.
![delete](images/thunderclient/delete/delete2.png)

## Peticiones RestClient

### POST

![post](images/restclient/post.PNG)

---

### GET 

![get](images/restclient/get.PNG)

---

### GET ID

![getid](images/restclient/getid.PNG)

---

### GET FILTRADO POR ACTIVE=TRUE

![getfiltrado1](images/restclient/getfiltrado.PNG)

---

### GET FILTRADO POR LEVEL=INTERMEDIATE

![getfiltrado2](images/restclient/getfiltrado2.PNG)

---

### PUT

![put](images/restclient/put.PNG)

---

### PATCH

![patch](images/restclient/patch.PNG)

---

### DELETE

![delete](images/restclient/delete.PNG)
