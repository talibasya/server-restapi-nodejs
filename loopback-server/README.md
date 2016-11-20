# loopback-server

This is a server which has automatically generated inteface using package `strongloop`.

You can make a same server yourself. 
### Please follow instruction above:
- First of all you have install global pacakge for generate a server and provide model
	```
	sudo npm install strongloop -g
	```
	
- go to folder, where you want install a server and call package for generate `loopback` server
	```
	cd YOUR_FOLDER
	slc loopback
	```

- fill out props on terminal:
	- Application name `loopback-server`;
	- Directory name `loobpack-server`;
	- Version loopback `2.x (stable)`;
	- Kind of application `api-server`;
- go to server folder and create models, which will use in your server
	```
	cd loopback-server
	slc loopback:model
	```

- and answer the questions:
	- Modelname `dishes`;
	- Data-source `db (memory)`;
	- Base class `PersistedModel`;
	- Via REST-API `Yes`;
	- Custom plural form ``;
	- Common model or server only `common`;
	- ---type props **_name, type, required, default value_** for each item---
- run you server
	```
	node .
	```