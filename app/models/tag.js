//exprot
module.exports = function (sequelize, dataTypes) {
    /**
     * 内容分类模型
     */
    var Tag = sequelize.define('Tag', {
        // 主键ID
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        // 标签名字
        name: {
            type: dataTypes.STRING
        }
    }, {
        tableName: 'tag',
        timestamps: true
    });

    return Tag;
}