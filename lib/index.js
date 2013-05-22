var https = require('https')
  , clientKey
  , apiKey
  , domain = 'https://api.digitalocean.com/';

exports.SetKeys = function(clientKey, apiKey) {
  this.clientKey = clientKey;
  this.apiKey = apiKey;
};

exports.GetDroplets = function(callback) {
  https.get(domain + '/droplets/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.NewDroplet = function(info, callback) {
  https.get(domain + 'droplets/new??client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&name=' + info.name 
  + '&size_id=' + info.size + '&image_id=' + info.image + '&region_id=' + info.region + '&client_id=' + this.clientKey 
  + '&virtio=' + info.virtio + '&ssh_key_ids=' + info.sshKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.RebootDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/reboot/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.PowerCycleDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_cycle/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.ShutDownDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/shutdown/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.PowerOffDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_off/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.PowerOnDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_on/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.ResetRootPassword = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/password_reset/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.TakeSnapshot = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/snapshot/?name_id=' + info.name + '&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.RestoreDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/restore/?image_id=' + info.image + '&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.RebuildDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/rebuild/?image_id=' + info.image + '&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.EnableBackups = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/enable_backups/?image_id=&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.DisableBackups = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/disable_backups/?image_id=&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.RenameDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/rename/?client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&name=' + info.name, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetRegions = function(info, callback) {
  https.get(domain + 'regions/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetImages = function(info, callback) {
  https.get(domain + 'images/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.ShowImage = function(info, callback) {
  https.get(domain + 'images' + info.image + '/?client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&name=' + info.name, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.TransferImage = function(info, callback) {
  https.get(domain + 'images' + info.image + '/transfer/?client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&region_id=' + info.region, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetSshKeys = function(callback) {
  https.get(domain + 'ssh_keys/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.AddSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/new/?name=' + info.name + '&ssh_pub_key=' + info.sshKey + '&client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.EditSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/edit/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.DestroySshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/destroy/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetSizes = function(callback) {
  https.get(domain + 'sizes/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};