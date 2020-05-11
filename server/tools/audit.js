import models from '../models';
const {
    audit
} = models;

export default class AuditTool {
    static async createAudit(option) {
        return await audit.create(option)
    }
}