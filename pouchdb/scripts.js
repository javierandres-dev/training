/* DOCS */
const aDoc = {
  _id: '1',
  farm: {
    id: 1,
    adminName: 'aa',
    adminPni: '11',
    farmName: 'the a',
  },
};

const bDoc = {
  _id: '2',
  farm: {
    id: 2,
    adminName: 'bb',
    adminPni: '22',
    farmName: 'the b',
  },
};

const cDoc = {
  _id: '3',
  farm: {
    id: 3,
    adminName: 'cc',
    adminPni: '33',
    farmName: 'the c',
  },
};

const upDoc = {
  _id: '3',
  _rev: '1-2c0eb963e7b0a4c0638e4b74f0b8f57c',
  farm: {
    id: 33,
    adminName: 'xx',
    adminPni: '00',
    farmName: 'xx',
  },
};

const rmDoc = {
  _id: '3',
  _rev: '4-7f77d48f77d3f49e24b65787a7244376',
};

/* LOCAL DATABASE */
const localDB = new PouchDB('MyDB');

function localInfo() {
  localDB.info().then(function (info) {
    console.log('LOCAL info: ', info);
  });
}
localInfo();

function localAddDoc(doc) {
  localDB.put(doc, function callback(err, result) {
    if (result) {
      console.log('LOCAL result: ', result);
    }
    if (err) {
      console.log('LOCAL err: ', err);
    }
    if (!err) {
      console.log('LOCAL Successfully');
    }
  });
}
//localAddDoc(aDoc);
//localAddDoc(bDoc);
//localAddDoc(cDoc);

function localUpdateDoc(doc) {
  localDB.put(doc);
}
//localUpdateDoc(upDoc);

function localDeleteDoc(doc) {
  localDB.remove(doc);
}
//localDeleteDoc(rmDoc);

function localShowDocs() {
  localDB.allDocs({ include_docs: true }, function (err, doc) {
    //console.log('doc: ', doc);
    //console.log('doc.rows: ', doc.rows);
    const items = doc.rows;
    if (items) {
      items.map((item) => {
        console.log('LOCAL item: ', item);
        //console.log('LOCAL item.doc.farm: ', item.doc.farm);
      });
    }
  });
}
localShowDocs();

/* REMOTE DATABASE */
const remoteDB = new PouchDB(
  'http://admin:123456@couchdb.localhost:5984/farms'
);

function remoteInfo() {
  remoteDB.info().then(function (info) {
    console.log('REMOTE info: ', info);
  });
}
remoteInfo();

function remoteAddDoc(doc) {
  remoteDB.put(doc, function callback(err, result) {
    if (result) {
      console.log('REMOTE result: ', result);
    }
    if (err) {
      console.log('REMOTE err: ', err);
    }
    if (!err) {
      console.log('REMOTE Successfully');
    }
  });
}
//remoteAddDoc(aDoc);
//remoteAddDoc(bDoc);
//remoteAddDoc(cDoc);

function remoteUpdateDoc(doc) {
  remoteDB.put(doc);
}
//remoteUpdateDoc(upDoc);

function remoteDeleteDoc(doc) {
  remoteDB.remove(doc);
}
//remoteDeleteDoc(rmDoc);

function remoteShowDocs() {
  remoteDB.allDocs(
    { include_docs: true, descending: true },
    function (err, doc) {
      //console.log('doc: ', doc);
      //console.log('doc.rows: ', doc.rows);
      const items = doc.rows;
      if (items) {
        items.map((item) => {
          console.log('REMOTE item: ', item);
          //console.log('REMOTE item.doc.farm: ', item.doc.farm);
        });
      }
    }
  );
}

remoteShowDocs();

/* UNIDIRECTIONAL REPLICATION */
function unidirectionalReplication() {
  localDB.replicate
    .to(remoteDB)
    .on('complete', function () {
      console.log('UNIDIRECTIONAL REPLICATION: Successfully');
    })
    .on('error', function (err) {
      console.log('UNIDIRECTIONAL REPLICATION: Fail');
    });
}
//unidirectionalReplication();

/* BIDIRECTIONAL REPLICATION */
function bidirectionalReplication() {
  localDB
    .sync(remoteDB)
    .on('complete', function () {
      console.log('BIDIRECTIONAL REPLICATION: Successfully');
    })
    .on('error', function (err) {
      console.log('BIDIRECTIONAL REPLICATION: Fail');
    });
}
//bidirectionalReplication();

/* LIVE REPLICATION */
function liveReplication() {
  localDB
    .sync(remoteDB, {
      live: true,
      retry: true,
    })
    .on('change', function (change) {
      console.log('LIVE REPLICATION: Successfully');
    })
    .on('paused', function (info) {
      console.log('LIVE REPLICATION: Paused');
    })
    .on('active', function (info) {
      console.log('LIVE REPLICATION: Resumed');
    })
    .on('error', function (err) {
      console.log('LIVE REPLICATION: Fail');
    });
}
//liveReplication();
