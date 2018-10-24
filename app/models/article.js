//exprot
module.exports = function (sequelize, dataTypes) {
    /**
     * 内容分类模型
     */
    var Article = sequelize.define('Article', {
        // 主键ID
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        // 文章标题
        title: {
            type: dataTypes.STRING
        },

        // 文章内容
        content: {
            type: dataTypes.STRING
        },

        // 文章描述
        describe: {
            type: dataTypes.STRING
        },

        // 创建时间
        created_at: {
            type: dataTypes.DATE
        },

        // 更新时间
        updated_at: {
            type: dataTypes.DATE
        },

        // 删除时间
        deleted_at: {
            type: dataTypes.DATE
        },
    }, {
        tableName: 'article',
        timestamps: false,
        // classMethods: {
        //     associate: function (models) {
        //         // 一篇文章有多个标签
        //         Category.hasMany(models.Tag, {
        //             as: 'tags',
        //             foreignKey: 'tag_id'
        //         })
        //     }
        // }
    });

    return Article;
}