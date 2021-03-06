import {CodeProject} from './Codes';
import {Status} from './InfraVuln';

class SoftwarePacket {
  name: string;
}

class SoftwarePacketVulnerability {
  name: string;
  description: string;
  inserted: string;
  severity: string;
  softwarepacket: SoftwarePacket;
  type: string = 'opensource';
  ticketId: number;
  status: Status;
}

export class SoftVuln {
  codeProject: CodeProject;
  softwarePacketVulnerability: SoftwarePacketVulnerability;
  status: Status;
}
export class SoftVulnPojo {
  codeProjectName: string;
  location: string;
  name: string;
  severity: string;
  detected: string;
}
