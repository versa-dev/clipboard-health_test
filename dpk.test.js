const { deterministicPartitionKey } = require('./dpk');
const crypto = require('crypto');
const MAX_PARTITION_KEY_LENGTH = 256;

describe('deterministicPartitionKey', () => {
  const event = {
    partitionKey: 'partition key',
    someData: 'data'
  };

  it('should use the provided partition key if it exists', () => {
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(event.partitionKey);
  });

  it('should generate a hash of the event data if partition key does not exist in the event data', () => {
    const { partitionKey, ...rest } = event;
    const data = JSON.stringify(rest);
    const expectedHash = crypto.createHash('sha3-512').update(data).digest('hex');

    const result = deterministicPartitionKey({ ...rest });

    expect(result).toEqual(expectedHash);
  });

  it('should return "0" if no event is provided', () => {
    const result = deterministicPartitionKey(null);

    expect(result).toEqual('0');
  });

  it('should stringify the candidate if it is not a string', () => {
    const newEvent = {
      someData: 'data',
      partitionKey: 1
    }
    const expectedResult = JSON.stringify(1);
 
    const result = deterministicPartitionKey(newEvent);

    expect(result).toEqual(expectedResult);
  });

  it('should hash the candidate again if it exceeds the max length', () => {
    let candidate = '';

    // Make the candidate longer than MAX_PARTITION_KEY_LENGTH
    for (let i = 0; i <= MAX_PARTITION_KEY_LENGTH + 1; i++) {
      candidate += 'x';
    }

    const newEvent = {
      someData: 'data',
      partitionKey: candidate
    }
    
    const expectedHash = crypto.createHash('sha3-512').update(candidate).digest('hex');

    const result = deterministicPartitionKey(newEvent);

    expect(result).toEqual(expectedHash);
  });
});