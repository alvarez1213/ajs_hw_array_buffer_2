import ArrayBufferConverter from '../converter';
import getBuffer from '../get_buffer';

describe('ArrayBufferConverter', () => {
  it('should load ArrayBuffer', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toHaveLength(53);
    expect(typeof converter.buffer).toBe('object');
  });

  it('should parse ArrayBuffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    converter.toString();
    expect(typeof converter.bufferInString).toBe('string');
  });
});
