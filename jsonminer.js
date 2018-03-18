// 20180313123634
// http://6378a1.ethosdistro.com/?json=yes

var data = {
  "rigs": {
    "6324e": {
      "condition": "just_booted",
      "version": "1.3.0",
      "driver": "amdgpu",
      "miner": "claymore",
      "gpus": "10",
      "miner_instance": "10",
      "miner_hashes": "30.58 30.49 30.58 30.50 30.56 30.59 30.52 30.59 30.57 30.58",
      "bioses": "113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R 113-1E3660U-O5R",
      "meminfo": "GPU0:01.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU1:02.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU2:03.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU3:04.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU4:05.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU5:09.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU6:0a.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU7:0c.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU8:0e.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10\nGPU9:0f.00.0:Radeon RX 580:113-1E3660U-O5R:Unknown Micron:GDDR5:Polaris10",
      "vramsize": "8 8 8 8 8 8 8 8 8 8",
      "drive_name": "Mass Storage Device 21WUCVB18NGJ3L1D",
      "mobo": "H110 Pro BTC ",
      "biosversion": "P1.10",
      "lan_chip": "Intel Corporation Ethernet Connection (2) I219-V (rev 31)",
      "connected_displays": null,
      "ram": "8",
      "flags": null,
      "rack_loc": "",
      "ip": "10.0.1.21",
      "server_time": 1520912181,
      "uptime": "300",
      "miner_secs": 200,
      "rx_kbps": "0.00",
      "tx_kbps": "0.00",
      "load": "0.29",
      "cpu_temp": "36",
      "freespace": 1.7,
      "hash": 305.56,
      "pool": "eth-asia1.nanopool.org:9999",
      "temp": "50.00 47.00 45.00 46.00 44.00 48.00 44.00 46.00 43.00 42.00",
      "powertune": "3 3 3 3 3 3 3 3 3 3",
      "voltage": "0.880 0.880 0.880 0.880 0.880 0.880 0.880 0.880 0.880 0.880",
      "watts": null,
      "fanrpm": "3988 3988 3988 3988 3988 3988 3988 3988 3988 3988",
      "core": "1200 1200 1200 1200 1200 1200 1200 1200 1200 1200",
      "mem": "2225 2225 2225 2225 2225 2225 2225 2225 2225 2225"
    }
  },
  "total_hash": 305.56,
  "alive_gpus": 10,
  "total_gpus": 10,
  "alive_rigs": 1,
  "total_rigs": 1,
  "current_version": "1.3.0",
  "avg_temp": 45.5,
  "capacity": "100.0",
  "per_info": {
    "claymore": {
      "hash": 306,
      "per_alive_gpus": 10,
      "per_total_gpus": 10,
      "per_alive_rigs": 1,
      "per_total_rigs": 1,
      "per_hash-gpu": "30.6",
      "per_hash-rig": "306.0",
      "current_time": 1520912193
    }
  }
}


console.log(data.rigs.'6e8353ß');
//console.log(data["rigs"]["6e8353"]["miner_hashes"]);